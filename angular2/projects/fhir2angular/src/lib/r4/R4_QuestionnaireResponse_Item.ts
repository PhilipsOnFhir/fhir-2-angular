import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_QuestionnaireResponse_Answer } from './R4_QuestionnaireResponse_Answer'

export class R4_QuestionnaireResponse_Item      extends R4_BackboneElement
{

   static def : string = 'QuestionnaireResponse_Item';
   linkId : string ;
   definition : string ;
   text : string ;
   answer : R4_QuestionnaireResponse_Answer [];
   item : R4_QuestionnaireResponse_Item [];
}
