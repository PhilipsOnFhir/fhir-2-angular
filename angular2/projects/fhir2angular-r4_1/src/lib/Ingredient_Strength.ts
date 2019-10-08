import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Ingredient_ReferenceStrength } from './Ingredient_ReferenceStrength'
import { Ratio } from './Ratio'

export class Ingredient_Strength      extends BackboneElement
{

   static def : string = 'Ingredient_Strength';
   presentation : Ratio ;
   presentationHighLimit : Ratio ;
   concentration : Ratio ;
   concentrationHighLimit : Ratio ;
   measurementPoint : string ;
   country : CodeableConcept [];
   referenceStrength : Ingredient_ReferenceStrength [];
}
