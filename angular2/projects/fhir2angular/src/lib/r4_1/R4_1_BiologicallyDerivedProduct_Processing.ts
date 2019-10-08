import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_BiologicallyDerivedProduct_Processing      extends R4_1_BackboneElement
{

   static def : string = 'BiologicallyDerivedProduct_Processing';
   description : string ;
   procedure : R4_1_CodeableConcept ;
   additive : R4_1_Reference ;
   timeDateTime : string ;
   timePeriod : R4_1_Period ;
}
