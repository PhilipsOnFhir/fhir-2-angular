import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_Coding } from './R5_Coding'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Period } from './R5_Period'

export class R5_Encounter_ClassHistory      extends R5_BackboneElement
{

   static def : string = 'Encounter_ClassHistory';
   class : R5_Coding ;
   period : R5_Period ;
}
