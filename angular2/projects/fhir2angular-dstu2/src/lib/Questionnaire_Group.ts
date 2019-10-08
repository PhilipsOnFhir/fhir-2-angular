import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Questionnaire_Question } from './Questionnaire_Question'

export class Questionnaire_Group      extends BackboneElement
{

   static def : string = 'Questionnaire_Group';
   linkId : string ;
   title : string ;
   concept : Coding [];
   text : string ;
   required : boolean ;
   repeats : boolean ;
   group : Questionnaire_Group [];
   question : Questionnaire_Question [];
}
