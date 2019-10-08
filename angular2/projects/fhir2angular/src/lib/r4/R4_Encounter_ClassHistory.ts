import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_Coding } from './R4_Coding'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Period } from './R4_Period'

export class R4_Encounter_ClassHistory      extends R4_BackboneElement
{

   static def : string = 'Encounter_ClassHistory';
   class : R4_Coding ;
   period : R4_Period ;
}
