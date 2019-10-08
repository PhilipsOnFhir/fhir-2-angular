import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_ContactDetail } from './STU3_ContactDetail'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_OperationDefinition_Overload } from './STU3_OperationDefinition_Overload'
import { STU3_OperationDefinition_Parameter } from './STU3_OperationDefinition_Parameter'
import { STU3_OperationKindEnum } from './STU3_OperationKindEnum'
import { STU3_PublicationStatusEnum } from './STU3_PublicationStatusEnum'
import { STU3_Reference } from './STU3_Reference'
import { STU3_ResourceTypeEnum } from './STU3_ResourceTypeEnum'
import { STU3_UsageContext } from './STU3_UsageContext'

export class STU3_OperationDefinition      extends STU3_DomainResource
{

   static def : string = 'OperationDefinition';
   url : string ;
   version : string ;
   name : string ;
   status : STU3_PublicationStatusEnum ;
   kind : STU3_OperationKindEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : STU3_ContactDetail [];
   description : string ;
   useContext : STU3_UsageContext [];
   jurisdiction : STU3_CodeableConcept [];
   purpose : string ;
   idempotent : boolean ;
   code : string ;
   comment : string ;
   base : STU3_Reference ;
   resource : STU3_ResourceTypeEnum [];
   system : boolean ;
   type : boolean ;
   instance : boolean ;
   parameter : STU3_OperationDefinition_Parameter [];
   overload : STU3_OperationDefinition_Overload [];
}
