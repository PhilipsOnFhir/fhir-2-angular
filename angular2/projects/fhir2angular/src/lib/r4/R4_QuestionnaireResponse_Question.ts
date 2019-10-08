import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_QuestionnaireResponse_Answer } from './R4_QuestionnaireResponse_Answer'

export class R4_QuestionnaireResponse_Question      extends R4_BackboneElement
{

   static def : string = 'QuestionnaireResponse_Question';
   linkId : string ;
   text : string ;
   answer : R4_QuestionnaireResponse_Answer [];
}
