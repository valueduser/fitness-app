create table
  workout (
    id serial primary key,
    name text,
    notes text
  );

create table
  activity (
    id serial primary key,
    name text,
    image text,
    reps int4,
    sets int4,
    weight int4,
    weight_units varchar,
    duration int4,
    duration_units varchar,
    notes text,
    instructions text
  );

create table
  workout_activity (
    id serial,
    workout_id int not null references workout,
    activity_id int not null references activity,
    primary key (id, workout_id, activity_id)
  );
