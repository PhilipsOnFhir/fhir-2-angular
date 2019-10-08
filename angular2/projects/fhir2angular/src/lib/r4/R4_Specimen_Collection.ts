import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Period } from './R4_Period'
import { R4_Quantity } from './R4_Quantity'
import { R4_Reference } from './R4_Reference'

export class R4_Specimen_Collection      extends R4_BackboneElement
{

   static def : string = 'Specimen_Collection';
   collector : R4_Reference ;
   collectedDateTime : string ;
   collectedPeriod : R4_Period ;
   duration : string ;
   quantity : R4_Quantity ;
   method : R4_CodeableConcept ;
   bodySite : R4_CodeableConcept ;
   fastingStatusCodeableConcept : R4_CodeableConcept ;
   fastingStatusDuration : string ;
}
