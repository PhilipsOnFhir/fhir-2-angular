import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_QuestionnaireResponse_Answer } from './STU3_QuestionnaireResponse_Answer'
import { STU3_Reference } from './STU3_Reference'

export class STU3_QuestionnaireResponse_Item      extends STU3_BackboneElement
{

   static def : string = 'QuestionnaireResponse_Item';
   linkId : string ;
   definition : string ;
   text : string ;
   subject : STU3_Reference ;
   answer : STU3_QuestionnaireResponse_Answer [];
   item : STU3_QuestionnaireResponse_Item [];
}
