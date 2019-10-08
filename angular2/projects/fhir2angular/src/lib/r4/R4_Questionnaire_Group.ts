import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_Coding } from './R4_Coding'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Questionnaire_Question } from './R4_Questionnaire_Question'

export class R4_Questionnaire_Group      extends R4_BackboneElement
{

   static def : string = 'Questionnaire_Group';
   linkId : string ;
   title : string ;
   concept : R4_Coding [];
   text : string ;
   required : boolean ;
   repeats : boolean ;
   group : R4_Questionnaire_Group [];
   question : R4_Questionnaire_Question [];
}
