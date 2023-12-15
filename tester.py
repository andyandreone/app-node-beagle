import psycopg2
from psycopg2 import sql
conn = psycopg2.connect(host="janus-cluster.ci9p5pgbpkpv.us-west-2.redshift.amazonaws.com",
                        port=5439,
                        user="janusdb_produccion",
                        password="Prod1234",
                        database="lfdb_prod")