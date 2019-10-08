import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_QuestionnaireResponse_Answer } from './DSTU2_QuestionnaireResponse_Answer'

export class DSTU2_QuestionnaireResponse_Question      extends DSTU2_BackboneElement
{

   static def : string = 'QuestionnaireResponse_Question';
   linkId : string ;
   text : string ;
   answer : DSTU2_QuestionnaireResponse_Answer [];
}
