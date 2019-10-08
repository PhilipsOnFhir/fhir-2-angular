import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'
import { Timing } from './Timing'

export class NutritionIntake_ConsumedItem      extends BackboneElement
{

   static def : string = 'NutritionIntake_ConsumedItem';
   type : CodeableConcept ;
   nutritionProduct : CodeableConcept ;
   schedule : Timing ;
   amount : Quantity ;
   rate : Quantity ;
   notConsumed : boolean ;
   notConsumedReason : CodeableConcept ;
}
