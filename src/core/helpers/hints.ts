import { get_static } from '../Additional/Contstants';

export function get_hints() {
  let hints: any;
  return get_static('hints')
    .then(val => {
      hints = val;
     
      const sections: { [name: string]: string[] } = {
        section_1: [],
        section_2: [],
        section_3: [],
        section_4: [],
        section_5:[],
        section_6:[],
        section_7:[],
      };

      for (const sect in sections) {
        sections[sect] = hints.filter((val: any) => {
          return val.section === sect;
        });
      }

    
      return sections ;
    })
    .catch(e => {
      console.log('Error', e);
    });
}
