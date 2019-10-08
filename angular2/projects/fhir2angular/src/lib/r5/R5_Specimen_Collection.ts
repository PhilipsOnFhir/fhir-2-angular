import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Period } from './R5_Period'
import { R5_Quantity } from './R5_Quantity'
import { R5_Reference } from './R5_Reference'

export class R5_Specimen_Collection      extends R5_BackboneElement
{

   static def : string = 'Specimen_Collection';
   collector : R5_Reference ;
   collectedDateTime : string ;
   collectedPeriod : R5_Period ;
   duration : string ;
   quantity : R5_Quantity ;
   method : R5_CodeableConcept ;
   bodySite : R5_CodeableConcept ;
   fastingStatusCodeableConcept : R5_CodeableConcept ;
   fastingStatusDuration : string ;
}
