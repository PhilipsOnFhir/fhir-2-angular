import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_DetectedIssue_Mitigation      extends R5_BackboneElement
{

   static def : string = 'DetectedIssue_Mitigation';
   action : R5_CodeableConcept ;
   date : string ;
   author : R5_Reference ;
}
