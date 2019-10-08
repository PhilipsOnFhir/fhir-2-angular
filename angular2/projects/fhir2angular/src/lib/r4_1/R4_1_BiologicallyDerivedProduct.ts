import { R4_1_BiologicallyDerivedProductCategoryEnum } from './R4_1_BiologicallyDerivedProductCategoryEnum'
import { R4_1_BiologicallyDerivedProductStatusEnum } from './R4_1_BiologicallyDerivedProductStatusEnum'
import { R4_1_BiologicallyDerivedProduct_Collection } from './R4_1_BiologicallyDerivedProduct_Collection'
import { R4_1_BiologicallyDerivedProduct_Manipulation } from './R4_1_BiologicallyDerivedProduct_Manipulation'
import { R4_1_BiologicallyDerivedProduct_Processing } from './R4_1_BiologicallyDerivedProduct_Processing'
import { R4_1_BiologicallyDerivedProduct_Storage } from './R4_1_BiologicallyDerivedProduct_Storage'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_BiologicallyDerivedProduct      extends R4_1_DomainResource
{

   static def : string = 'BiologicallyDerivedProduct';
   identifier : R4_1_Identifier [];
   productCategory : R4_1_BiologicallyDerivedProductCategoryEnum ;
   productCode : R4_1_CodeableConcept ;
   status : R4_1_BiologicallyDerivedProductStatusEnum ;
   request : R4_1_Reference [];
   quantity : string ;
   parent : R4_1_Reference [];
   collection : R4_1_BiologicallyDerivedProduct_Collection ;
   processing : R4_1_BiologicallyDerivedProduct_Processing [];
   manipulation : R4_1_BiologicallyDerivedProduct_Manipulation ;
   storage : R4_1_BiologicallyDerivedProduct_Storage [];
}
