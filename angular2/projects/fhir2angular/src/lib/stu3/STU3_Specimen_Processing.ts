import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Specimen_Processing      extends STU3_BackboneElement
{

   static def : string = 'Specimen_Processing';
   description : string ;
   procedure : STU3_CodeableConcept ;
   additive : STU3_Reference [];
   timeDateTime : string ;
   timePeriod : STU3_Period ;
}
