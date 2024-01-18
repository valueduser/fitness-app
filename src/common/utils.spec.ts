import { Workout } from "../types/Workout"
import { Utils } from "./utils"

describe('getNextActivity', () => {
  const workout: Workout = {
    id: 0,
    name: 'real tough',
    activities: [
      {
        id: 51,
        name: 'first',
        image: 'location',
        reps: 0,
        sets: 0,
        isBilateral: false,
        equipment: [],
        weight: 5, 
        weight_units: 'pounds',
        tags: [],
        duration: 0,
        duration_units: 'seconds',
        notes: 'no notes',
        instructions: 'just do your best'
      },
      {
        id: 1,
        name: 'second',
        image: 'location',
        reps: 0,
        sets: 0,
        isBilateral: false,
        equipment: [],
        weight: 5, 
        weight_units: 'pounds',
        tags: [],
        duration: 0,
        duration_units: 'seconds',
        notes: 'no notes',
        instructions: 'just do your best'
      },
      {
        id: 42,
        name: 'third',
        image: 'location',
        reps: 0,
        sets: 0,
        isBilateral: false,
        equipment: [],
        weight: 5, 
        weight_units: 'pounds',
        tags: [],
        duration: 0,
        duration_units: 'seconds',
        notes: 'no notes',
        instructions: 'just do your best'
      },
    ],
    notes: 'not available'
  }

  it('gets the next activity', () =>  {
    expect(Utils.getNextActivity(0, workout)?.id).toEqual(1)
    expect(Utils.getNextActivity(1, workout)?.id).toEqual(42)
    expect(Utils.getNextActivity(2, workout)).toEqual(null)
  })
})

describe('isNullOrEmpty', () => {
  it('should return true when argument is null or empty', () => {
    expect(Utils.isNullOrEmpty(null)).toBeTruthy()
    expect(Utils.isNullOrEmpty(undefined)).toBeTruthy()
    expect(Utils.isNullOrEmpty('')).toBeTruthy()
    expect(Utils.isNullOrEmpty(' ')).toBeTruthy()
    expect(Utils.isNullOrEmpty([])).toBeTruthy()
    expect(Utils.isNullOrEmpty({})).toBeTruthy()
  })

  it('shoudl return false when argument is not null or empty', () => {
    expect(Utils.isNullOrEmpty('not null')).toBeFalsy()
    expect(Utils.isNullOrEmpty('something')).toBeFalsy()
    expect(Utils.isNullOrEmpty('42')).toBeFalsy()
    expect(Utils.isNullOrEmpty([42])).toBeFalsy()
    expect(Utils.isNullOrEmpty(['1', '2', '3'])).toBeFalsy()
    expect(Utils.isNullOrEmpty({ key: 'value' })).toBeFalsy()
  })
});