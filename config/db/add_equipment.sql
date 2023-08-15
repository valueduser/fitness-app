create table 
  equipment (
    id serial primary key,
    name text,
  );

create table
  activity_equipment (
    id serial,
    activity_id int not null references activity,
    equipment_id int not null references equipment,
    primary key (id, workout_id, equipment_id)
  );
