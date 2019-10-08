import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DeviceComponent_ProductionSpecification } from './DSTU2_DeviceComponent_ProductionSpecification'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_DeviceComponent      extends DSTU2_DomainResource
{

   static def : string = 'DeviceComponent';
   type : DSTU2_CodeableConcept ;
   identifier : DSTU2_Identifier ;
   lastSystemChange : string ;
   source : DSTU2_Reference ;
   parent : DSTU2_Reference ;
   operationalStatus : DSTU2_CodeableConcept [];
   parameterGroup : DSTU2_CodeableConcept ;
   measurementPrinciple : string ;
   productionSpecification : DSTU2_DeviceComponent_ProductionSpecification [];
   languageCode : DSTU2_CodeableConcept ;
}
