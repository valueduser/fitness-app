export type Activity = {
  id: number,
  name: string, 
  image: string | '', 
  reps: number | undefined, 
  sets: number | undefined, 
  isBilateral: boolean | false, 
  equipment: string[] | [], 
  weight: number | undefined, 
  weightUnits: string | undefined, 
  tags: string[] | [], 
  duration: number | undefined, 
  durationUnits: string | undefined,
  notes: string | undefined,
  instructions: string | undefined,
  list: string // TODO: move this onto the workout class or remove all together.
};

// TODO: make helper function class some where to define isDurationTypeActivity, isRepetitionTypeActivity


// export class Activity {
//    id: number = -1;
//   // protected name: string;
//   // protected image: string;
//   // protected reps: number;
//   // protected sets: number;
//   // protected equipment: string[];
//   // protected weight: number;
//   // protected weightUnits: string;
//   // protected tags: string[];
//   // protected duration: number;
//   // protected durationUnits: string;

//   constructor(protected name: string, protected image: string | '', protected reps: number | undefined, protected sets: number | undefined, protected equipment: string[] | [], protected weight: number | undefined, protected weightUnits: string | undefined, protected tags: string[] | [], protected duration: number | undefined, protected durationUnits: string | undefined) {
//     this.id = -1; // auto inc
//     this.name = name;
//     this.image = image;
//     this.reps = reps;
//     this.sets = sets;
//     this.equipment = equipment;
//     this.weight = weight;
//     this.weightUnits = weightUnits;
//     this.tags = tags;
//     this.duration = duration;
//     this.durationUnits = durationUnits;
//   }
// }
