import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'

export class R4_DeviceComponent_ProductionSpecification      extends R4_BackboneElement
{

   static def : string = 'DeviceComponent_ProductionSpecification';
   specType : R4_CodeableConcept ;
   componentId : R4_Identifier ;
   productionSpec : string ;
}
