import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'

export class DSTU2_DeviceComponent_ProductionSpecification      extends DSTU2_BackboneElement
{

   static def : string = 'DeviceComponent_ProductionSpecification';
   specType : DSTU2_CodeableConcept ;
   componentId : DSTU2_Identifier ;
   productionSpec : string ;
}
