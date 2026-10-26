import sqlite3
from pathlib import Path

DATA_DIR = Path(__file__).resolve().parent / "data"
DB_PATH = DATA_DIR / "sis_database.db"

def get_connection():
    """Return a connection with Row factory enabled for dictionary-like access."""
    if not DB_PATH.exists():
        raise FileNotFoundError(f"Database not found at {DB_PATH}. Please run generate_large_scale_dataset.py first.")
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def execute_query(query: str, params: tuple = ()):
    with get_connection() as conn:
        cursor = conn.cursor()
        cursor.execute(query, params)
        return [dict(row) for row in cursor.fetchall()]

def execute_one(query: str, params: tuple = ()):
    with get_connection() as conn:
        cursor = conn.cursor()
        cursor.execute(query, params)
        row = cursor.fetchone()
        return dict(row) if row else None

def execute_insert(query: str, params: tuple = ()):
    with get_connection() as conn:
        cursor = conn.cursor()
        cursor.execute(query, params)
        conn.commit()
        return cursor.lastrowid

def execute_transaction(operations: list):
    """Execute multiple SQL statements inside a single atomic transaction with rollback on failure."""
    with get_connection() as conn:
        cursor = conn.cursor()
        try:
            cursor.execute("BEGIN IMMEDIATE")
            for query, params in operations:
                cursor.execute(query, params)
            conn.commit()
            return True
        except Exception as e:
            conn.rollback()
            raise e
