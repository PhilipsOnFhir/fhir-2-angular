import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_Coding } from './STU3_Coding'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Period } from './STU3_Period'

export class STU3_Encounter_ClassHistory      extends STU3_BackboneElement
{

   static def : string = 'Encounter_ClassHistory';
   class : STU3_Coding ;
   period : STU3_Period ;
}
