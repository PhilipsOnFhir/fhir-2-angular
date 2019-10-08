import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_Coding } from './STU3_Coding'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_Questionnaire_Option      extends STU3_BackboneElement
{

   static def : string = 'Questionnaire_Option';
   valueInteger : string ;
   valueDate : string ;
   valueTime : string ;
   valueString : string ;
   valueCoding : STU3_Coding ;
}
