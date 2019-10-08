import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Period } from './STU3_Period'
import { STU3_Quantity } from './STU3_Quantity'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Specimen_Collection      extends STU3_BackboneElement
{

   static def : string = 'Specimen_Collection';
   collector : STU3_Reference ;
   collectedDateTime : string ;
   collectedPeriod : STU3_Period ;
   quantity : STU3_Quantity ;
   method : STU3_CodeableConcept ;
   bodySite : STU3_CodeableConcept ;
}
