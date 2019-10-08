import { DSTU2_Annotation } from './DSTU2_Annotation'
import { DSTU2_CarePlanStatusEnum } from './DSTU2_CarePlanStatusEnum'
import { DSTU2_CarePlan_Activity } from './DSTU2_CarePlan_Activity'
import { DSTU2_CarePlan_Participant } from './DSTU2_CarePlan_Participant'
import { DSTU2_CarePlan_RelatedPlan } from './DSTU2_CarePlan_RelatedPlan'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_CarePlan      extends DSTU2_DomainResource
{

   static def : string = 'CarePlan';
   identifier : DSTU2_Identifier [];
   subject : DSTU2_Reference ;
   status : DSTU2_CarePlanStatusEnum ;
   context : DSTU2_Reference ;
   period : DSTU2_Period ;
   author : DSTU2_Reference [];
   modified : string ;
   category : DSTU2_CodeableConcept [];
   description : string ;
   addresses : DSTU2_Reference [];
   support : DSTU2_Reference [];
   relatedPlan : DSTU2_CarePlan_RelatedPlan [];
   participant : DSTU2_CarePlan_Participant [];
   goal : DSTU2_Reference [];
   activity : DSTU2_CarePlan_Activity [];
   note : DSTU2_Annotation ;
}
