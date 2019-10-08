import { R4_1_CompartmentDefinition_Resource } from './R4_1_CompartmentDefinition_Resource'
import { R4_1_CompartmentTypeEnum } from './R4_1_CompartmentTypeEnum'
import { R4_1_ContactDetail } from './R4_1_ContactDetail'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_PublicationStatusEnum } from './R4_1_PublicationStatusEnum'
import { R4_1_UsageContext } from './R4_1_UsageContext'

export class R4_1_CompartmentDefinition      extends R4_1_DomainResource
{

   static def : string = 'CompartmentDefinition';
   url : string ;
   version : string ;
   name : string ;
   status : R4_1_PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : R4_1_ContactDetail [];
   description : string ;
   useContext : R4_1_UsageContext [];
   purpose : string ;
   code : R4_1_CompartmentTypeEnum ;
   search : boolean ;
   resource : R4_1_CompartmentDefinition_Resource [];
}
