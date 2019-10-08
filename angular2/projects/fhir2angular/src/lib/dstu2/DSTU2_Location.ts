import { DSTU2_Address } from './DSTU2_Address'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_ContactPoint } from './DSTU2_ContactPoint'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_LocationModeEnum } from './DSTU2_LocationModeEnum'
import { DSTU2_LocationStatusEnum } from './DSTU2_LocationStatusEnum'
import { DSTU2_Location_Position } from './DSTU2_Location_Position'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Location      extends DSTU2_DomainResource
{

   static def : string = 'Location';
   identifier : DSTU2_Identifier [];
   status : DSTU2_LocationStatusEnum ;
   name : string ;
   description : string ;
   mode : DSTU2_LocationModeEnum ;
   type : DSTU2_CodeableConcept ;
   telecom : DSTU2_ContactPoint [];
   address : DSTU2_Address ;
   physicalType : DSTU2_CodeableConcept ;
   position : DSTU2_Location_Position ;
   managingOrganization : DSTU2_Reference ;
   partOf : DSTU2_Reference ;
}
