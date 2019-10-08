import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'

export class STU3_DeviceComponent_ProductionSpecification      extends STU3_BackboneElement
{

   static def : string = 'DeviceComponent_ProductionSpecification';
   specType : STU3_CodeableConcept ;
   componentId : STU3_Identifier ;
   productionSpec : string ;
}
