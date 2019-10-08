import { R4_Annotation } from './R4_Annotation'
import { R4_CarePlanIntentEnum } from './R4_CarePlanIntentEnum'
import { R4_CarePlan_Activity } from './R4_CarePlan_Activity'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'
import { R4_RequestStatusEnum } from './R4_RequestStatusEnum'

export class R4_CarePlan      extends R4_DomainResource
{

   static def : string = 'CarePlan';
   identifier : R4_Identifier [];
   instantiatesCanonical : string [];
   instantiatesUri : string [];
   basedOn : R4_Reference [];
   replaces : R4_Reference [];
   partOf : R4_Reference [];
   status : R4_RequestStatusEnum ;
   intent : R4_CarePlanIntentEnum ;
   category : R4_CodeableConcept [];
   title : string ;
   description : string ;
   subject : R4_Reference ;
   encounter : R4_Reference ;
   period : R4_Period ;
   created : string ;
   author : R4_Reference ;
   contributor : R4_Reference [];
   careTeam : R4_Reference [];
   addresses : R4_Reference [];
   supportingInfo : R4_Reference [];
   goal : R4_Reference [];
   activity : R4_CarePlan_Activity [];
   note : R4_Annotation [];
}
