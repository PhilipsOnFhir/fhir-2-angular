import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_Coding } from './R4_1_Coding'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Period } from './R4_1_Period'

export class R4_1_Encounter_ClassHistory      extends R4_1_BackboneElement
{

   static def : string = 'Encounter_ClassHistory';
   class : R4_1_Coding ;
   period : R4_1_Period ;
}
