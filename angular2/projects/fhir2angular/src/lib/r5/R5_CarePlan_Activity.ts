import { R5_Annotation } from './R5_Annotation'
import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CarePlan_Detail } from './R5_CarePlan_Detail'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_CarePlan_Activity      extends R5_BackboneElement
{

   static def : string = 'CarePlan_Activity';
   outcomeCodeableConcept : R5_CodeableConcept [];
   outcomeReference : R5_Reference [];
   progress : R5_Annotation [];
   reference : R5_Reference ;
   detail : R5_CarePlan_Detail ;
}
