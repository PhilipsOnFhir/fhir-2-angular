import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Questionnaire_Question } from './DSTU2_Questionnaire_Question'

export class DSTU2_Questionnaire_Group      extends DSTU2_BackboneElement
{

   static def : string = 'Questionnaire_Group';
   linkId : string ;
   title : string ;
   concept : DSTU2_Coding [];
   text : string ;
   required : boolean ;
   repeats : boolean ;
   group : DSTU2_Questionnaire_Group [];
   question : DSTU2_Questionnaire_Question [];
}
