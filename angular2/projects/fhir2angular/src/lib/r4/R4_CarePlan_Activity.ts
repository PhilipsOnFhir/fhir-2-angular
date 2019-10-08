import { R4_Annotation } from './R4_Annotation'
import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CarePlan_Detail } from './R4_CarePlan_Detail'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_CarePlan_Activity      extends R4_BackboneElement
{

   static def : string = 'CarePlan_Activity';
   outcomeCodeableConcept : R4_CodeableConcept [];
   outcomeReference : R4_Reference [];
   progress : R4_Annotation [];
   reference : R4_Reference ;
   detail : R4_CarePlan_Detail ;
}
