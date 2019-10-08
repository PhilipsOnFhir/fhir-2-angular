import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'

export class R4_Specimen_Processing      extends R4_BackboneElement
{

   static def : string = 'Specimen_Processing';
   description : string ;
   procedure : R4_CodeableConcept ;
   additive : R4_Reference [];
   timeDateTime : string ;
   timePeriod : R4_Period ;
}
