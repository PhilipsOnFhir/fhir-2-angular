import { DSTU2_ClinicalImpressionStatusEnum } from './DSTU2_ClinicalImpressionStatusEnum'
import { DSTU2_ClinicalImpression_Finding } from './DSTU2_ClinicalImpression_Finding'
import { DSTU2_ClinicalImpression_Investigations } from './DSTU2_ClinicalImpression_Investigations'
import { DSTU2_ClinicalImpression_RuledOut } from './DSTU2_ClinicalImpression_RuledOut'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_ClinicalImpression      extends DSTU2_DomainResource
{

   static def : string = 'ClinicalImpression';
   patient : DSTU2_Reference ;
   assessor : DSTU2_Reference ;
   status : DSTU2_ClinicalImpressionStatusEnum ;
   date : string ;
   description : string ;
   previous : DSTU2_Reference ;
   problem : DSTU2_Reference [];
   triggerCodeableConcept : DSTU2_CodeableConcept ;
   triggerReference : DSTU2_Reference ;
   investigations : DSTU2_ClinicalImpression_Investigations [];
   protocol : string ;
   summary : string ;
   finding : DSTU2_ClinicalImpression_Finding [];
   resolved : DSTU2_CodeableConcept [];
   ruledOut : DSTU2_ClinicalImpression_RuledOut [];
   prognosis : string ;
   plan : DSTU2_Reference [];
   action : DSTU2_Reference [];
}
