import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_ContactDetail } from './R4_1_ContactDetail'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_OperationDefinition_Overload } from './R4_1_OperationDefinition_Overload'
import { R4_1_OperationDefinition_Parameter } from './R4_1_OperationDefinition_Parameter'
import { R4_1_OperationKindEnum } from './R4_1_OperationKindEnum'
import { R4_1_PublicationStatusEnum } from './R4_1_PublicationStatusEnum'
import { R4_1_UsageContext } from './R4_1_UsageContext'

export class R4_1_OperationDefinition      extends R4_1_DomainResource
{

   static def : string = 'OperationDefinition';
   url : string ;
   version : string ;
   name : string ;
   title : string ;
   status : R4_1_PublicationStatusEnum ;
   kind : R4_1_OperationKindEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : R4_1_ContactDetail [];
   description : string ;
   useContext : R4_1_UsageContext [];
   jurisdiction : R4_1_CodeableConcept [];
   purpose : string ;
   affectsState : boolean ;
   code : string ;
   comment : string ;
   base : string ;
   resource : string [];
   system : boolean ;
   type : boolean ;
   instance : boolean ;
   inputProfile : string ;
   outputProfile : string ;
   parameter : R4_1_OperationDefinition_Parameter [];
   overload : R4_1_OperationDefinition_Overload [];
}
