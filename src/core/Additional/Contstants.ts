import Tinkhundla from './../../mixins/Tinkhundla'

export const EconomicSectors = [
  'Energy',
  'Telecommunications',
  'Agriculture',
  'Frorestry',
  'Mining'
];

export const ProjectExistence = ['New', 'Old'];

export const ProjectSkillsOptions = ['Labor'];

export const LocallySourcedInputsOptions = ['Water', 'Cement'];

export const ExternallySourcedInputsOptions = ['Elecricity', 'Systems'];

export const StakeHoldersOptions = ['SWSC', 'EPTC', 'REPS'];


export  function TinkhundlaOptions(){
  console.log(Tinkhundla);
  return Tinkhundla.map((val)=>{
    return val.name
  })
}
