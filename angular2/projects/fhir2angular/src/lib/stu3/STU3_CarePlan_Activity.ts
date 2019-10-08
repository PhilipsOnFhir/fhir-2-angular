import { STU3_Annotation } from './STU3_Annotation'
import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CarePlan_Detail } from './STU3_CarePlan_Detail'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'

export class STU3_CarePlan_Activity      extends STU3_BackboneElement
{

   static def : string = 'CarePlan_Activity';
   outcomeCodeableConcept : STU3_CodeableConcept [];
   outcomeReference : STU3_Reference [];
   progress : STU3_Annotation [];
   reference : STU3_Reference ;
   detail : STU3_CarePlan_Detail ;
}
