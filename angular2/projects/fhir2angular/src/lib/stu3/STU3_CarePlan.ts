import { STU3_Annotation } from './STU3_Annotation'
import { STU3_CarePlanIntentEnum } from './STU3_CarePlanIntentEnum'
import { STU3_CarePlanStatusEnum } from './STU3_CarePlanStatusEnum'
import { STU3_CarePlan_Activity } from './STU3_CarePlan_Activity'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'

export class STU3_CarePlan      extends STU3_DomainResource
{

   static def : string = 'CarePlan';
   identifier : STU3_Identifier [];
   definition : STU3_Reference [];
   basedOn : STU3_Reference [];
   replaces : STU3_Reference [];
   partOf : STU3_Reference [];
   status : STU3_CarePlanStatusEnum ;
   intent : STU3_CarePlanIntentEnum ;
   category : STU3_CodeableConcept [];
   title : string ;
   description : string ;
   subject : STU3_Reference ;
   context : STU3_Reference ;
   period : STU3_Period ;
   author : STU3_Reference [];
   careTeam : STU3_Reference [];
   addresses : STU3_Reference [];
   supportingInfo : STU3_Reference [];
   goal : STU3_Reference [];
   activity : STU3_CarePlan_Activity [];
   note : STU3_Annotation [];
}
