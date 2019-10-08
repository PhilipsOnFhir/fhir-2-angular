import { R5_Annotation } from './R5_Annotation'
import { R5_CarePlanIntentEnum } from './R5_CarePlanIntentEnum'
import { R5_CarePlan_Activity } from './R5_CarePlan_Activity'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'
import { R5_RequestStatusEnum } from './R5_RequestStatusEnum'

export class R5_CarePlan      extends R5_DomainResource
{

   static def : string = 'CarePlan';
   identifier : R5_Identifier [];
   instantiatesCanonical : string [];
   instantiatesUri : string [];
   basedOn : R5_Reference [];
   replaces : R5_Reference [];
   partOf : R5_Reference [];
   status : R5_RequestStatusEnum ;
   intent : R5_CarePlanIntentEnum ;
   category : R5_CodeableConcept [];
   title : string ;
   description : string ;
   subject : R5_Reference ;
   encounter : R5_Reference ;
   period : R5_Period ;
   created : string ;
   author : R5_Reference ;
   contributor : R5_Reference [];
   careTeam : R5_Reference [];
   addresses : R5_Reference [];
   supportingInfo : R5_Reference [];
   goal : R5_Reference [];
   activity : R5_CarePlan_Activity [];
   note : R5_Annotation [];
}
