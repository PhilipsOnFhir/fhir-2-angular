import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_QuestionnaireResponse_Answer } from './R4_1_QuestionnaireResponse_Answer'

export class R4_1_QuestionnaireResponse_Item      extends R4_1_BackboneElement
{

   static def : string = 'QuestionnaireResponse_Item';
   linkId : string ;
   definition : string ;
   text : string ;
   answer : R4_1_QuestionnaireResponse_Answer [];
   item : R4_1_QuestionnaireResponse_Item [];
}
