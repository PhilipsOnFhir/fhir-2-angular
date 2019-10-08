import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_QuestionnaireResponse_Answer } from './R5_QuestionnaireResponse_Answer'

export class R5_QuestionnaireResponse_Item      extends R5_BackboneElement
{

   static def : string = 'QuestionnaireResponse_Item';
   linkId : string ;
   definition : string ;
   text : string ;
   answer : R5_QuestionnaireResponse_Answer [];
   item : R5_QuestionnaireResponse_Item [];
}
