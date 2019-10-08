import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CarePlan_Detail } from './R4_1_CarePlan_Detail'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_CarePlan_Activity      extends R4_1_BackboneElement
{

   static def : string = 'CarePlan_Activity';
   outcomeCodeableConcept : R4_1_CodeableConcept [];
   outcomeReference : R4_1_Reference [];
   progress : R4_1_Annotation [];
   reference : R4_1_Reference ;
   detail : R4_1_CarePlan_Detail ;
}
