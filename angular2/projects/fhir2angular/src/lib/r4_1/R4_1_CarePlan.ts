import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_CarePlanIntentEnum } from './R4_1_CarePlanIntentEnum'
import { R4_1_CarePlan_Activity } from './R4_1_CarePlan_Activity'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_RequestStatusEnum } from './R4_1_RequestStatusEnum'

export class R4_1_CarePlan      extends R4_1_DomainResource
{

   static def : string = 'CarePlan';
   identifier : R4_1_Identifier [];
   instantiatesCanonical : string [];
   instantiatesUri : string [];
   basedOn : R4_1_Reference [];
   replaces : R4_1_Reference [];
   partOf : R4_1_Reference [];
   status : R4_1_RequestStatusEnum ;
   intent : R4_1_CarePlanIntentEnum ;
   category : R4_1_CodeableConcept [];
   title : string ;
   description : string ;
   subject : R4_1_Reference ;
   encounter : R4_1_Reference ;
   period : R4_1_Period ;
   created : string ;
   author : R4_1_Reference ;
   contributor : R4_1_Reference [];
   careTeam : R4_1_Reference [];
   addresses : R4_1_Reference [];
   supportingInfo : R4_1_Reference [];
   goal : R4_1_Reference [];
   activity : R4_1_CarePlan_Activity [];
   note : R4_1_Annotation [];
}
