--DROP TABLE IF EXISTS optreden;
CREATE TABLE IF NOT EXISTS optreden(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    locatie TEXT,
    plaats TEXT,
    landCode TEXT,
    longitude REAL,
    latitude REAL,
    datum TEXT,
    tijd TEXT,
    isBuiten INTEGER,
    isSociaal INTEGER,
    isOpenbaar INTEGER,
    isBesloten INTEGER,
    isWildOp INTEGER,
    aantalBezoekers INTEGER
);
INSERT OR IGNORE INTO optreden VALUES (1, 'Amerpoort', 'Baarn', 'nl', 0.0, 0.0, '2019-07-25', '18:30', 0, 1, 1, 0, 0, 45);
INSERT OR IGNORE INTO optreden VALUES (2, 'Maassluise Muziekweek', 'Maassluis', 'nl', 0.0, 0.0, '2019-07-27', '15:00', 1, 0, 1, 0, 0, 500);
INSERT OR IGNORE INTO optreden VALUES (3, 'Mikes Badhuistheater', 'Amsterdam', 'nl', 0.0, 0.0, '2019-07-27', '19:00', 0, 0, 1, 0, 0, 310);

--DROP TABLE IF EXISTS stuk;
CREATE TABLE IF NOT EXISTS stuk(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titel TEXT,
    componist TEXT,
    code TEXT,
    metSolistKlarinet INTEGER,
    metSolistZang INTEGER
);
INSERT OR IGNORE INTO stuk VALUES (1, 'Miniaturen voor strijkkwartet', 'Tsintsadze', '11', 0, 0);
INSERT OR IGNORE INTO stuk VALUES (2, 'Oopsala', '?', 'L', 0, 0);
INSERT OR IGNORE INTO stuk VALUES (3, 'Kancheliade', 'Kancheli', '15', 1, 0);
INSERT OR IGNORE INTO stuk VALUES (4, 'Dolce riposo', 'Händel', '22', 0, 1);

--DROP TABLE IF EXISTS optreden_repertoire;
CREATE TABLE IF NOT EXISTS optreden_repertoire(
    optredenId INTEGER,
    stukId INTEGER,
    PRIMARY KEY (optredenId, stukId),
    FOREIGN KEY(optredenId) REFERENCES optreden (id) ON DELETE CASCADE,
    FOREIGN KEY(stukId) REFERENCES stuk (id) ON DELETE CASCADE
);
INSERT OR IGNORE INTO optreden_repertoire VALUES (1, 1);
INSERT OR IGNORE INTO optreden_repertoire VALUES (1, 2);
INSERT OR IGNORE INTO optreden_repertoire VALUES (2, 3);
INSERT OR IGNORE INTO optreden_repertoire VALUES (3, 3);
INSERT OR IGNORE INTO optreden_repertoire VALUES (3, 4);
