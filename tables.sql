CREATE DATABASE calendarbookingsystem_v2;

CREATE TABLE userInformation (
    email varchar,
    password varchar,
    fullname varchar,
    PRIMARY KEY(email)
);

CREATE TABLE event (
    eventid varchar,
    hostemail varchar,
    title varchar,
    starttime timestamptz,
    endtime timestamptz,
    description varchar,
    target varchar,
    PRIMARY KEY(eventid)
);

CREATE TABLE invitation (
    eventid varchar,
    guestemail varchar,
    status varchar,
    PRIMARY KEY(eventid, guestemail)
);
