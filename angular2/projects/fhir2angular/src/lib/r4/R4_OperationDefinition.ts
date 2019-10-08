import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_ContactDetail } from './R4_ContactDetail'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_OperationDefinition_Overload } from './R4_OperationDefinition_Overload'
import { R4_OperationDefinition_Parameter } from './R4_OperationDefinition_Parameter'
import { R4_OperationKindEnum } from './R4_OperationKindEnum'
import { R4_PublicationStatusEnum } from './R4_PublicationStatusEnum'
import { R4_UsageContext } from './R4_UsageContext'

export class R4_OperationDefinition      extends R4_DomainResource
{

   static def : string = 'OperationDefinition';
   url : string ;
   version : string ;
   name : string ;
   title : string ;
   status : R4_PublicationStatusEnum ;
   kind : R4_OperationKindEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : R4_ContactDetail [];
   description : string ;
   useContext : R4_UsageContext [];
   jurisdiction : R4_CodeableConcept [];
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
   parameter : R4_OperationDefinition_Parameter [];
   overload : R4_OperationDefinition_Overload [];
}
